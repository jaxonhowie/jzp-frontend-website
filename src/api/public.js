import {backend} from "@/api/env";
import axo from 'axios';

//创建一个axios实例
let instance = axo.create({
  //请求超时 10s
  timeout: 10000,
  //超时重试 2次
  retry: 2,
  //重试间隔 2s
  retryDelay: 2000,
  withCredentials: true
});

instance.interceptors.response.use(
  function (response) {
    //未登录用户跳转message url登陆
    if (response.data.code === '4000009') {
      window.location = response.data.message();
    }
    return response;
  },
  function (error) {
    //响应错误处理
    return Promise.reject(error);
  }
);

/**
 * 定义http请求后端的方法
 */
export default {
  /**
   * 发送GET请求
   *
   * @param req_mapping
   * @param that
   * @param params
   * @returns {Promise<any>}
   */
  fetchGet(req_mapping, that, params = {}) {
    let url = backend + req_mapping;
    return new Promise((resolve, reject) => {
      axo.get(url, {params}).then(res => {
        if (res.data.code === '200') {
          resolve(res.data)
        } else {
          that.$message({message: res.data.message, type: 'warning'});
          reject(res.data);
        }
      }).catch(error => {
        console.log(url, error);
        that.$message({message: '网络错误！请稍后再试', type: 'warning'});
        reject(error)
      })
    })
  },
  /**
   * 发送POST请求
   *
   * @param req_mapping
   * @param that
   * @param params
   * @returns {Promise<any>}
   */
  fetchPost(req_mapping, that, params = {}) {
    let url = backend + req_mapping;
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        if (res.data.code === '200') {
          resolve(res.data)
        } else {
          that.$message({message: res.data.message, type: 'warning'});
          reject(res.data);
        }
      }).catch(error => {
        console.log(url, error);
        that.$message({message: '网络错误！请稍后再试', type: 'warning'});
        reject(error)
      })
    })
  }
}

/**
 * 确认操作提示框
 */
export const confirm = (that, text, surefuc) => {
  that.$confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    surefuc();
  }).catch(() => {
  });
};
