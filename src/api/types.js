import ajax from './ajax'

const Base = "http://47.112.132.177:8221"
const Base1 = "http://47.97.170.173:8211"

export const LOGIN = (date) => ajax(Base+"/micro-uaa/user/login",date,'POST',false,true)                                      //登录
export const REGISTER = (date) => ajax(Base+"/user/login",date,'POST',false)                                                       //注册

export const REQROLES = (date) => ajax(Base1+"/role/find/page",date,'POST',false)                                                  //获取角色列表
export const REQMENUS = (date) => ajax(Base+"/micro-privilege-consumer/feign/menu/find/page",date,'POST',false)                    //获取菜单列表
export const UPLOADROLE = (name,remark,menus) => ajax(Base1+'/role/register?name='+ name + '&remark=' + remark,menus,'POST',false) //上传角色
