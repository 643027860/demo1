import {CHANCEPATHNAMES,CHOICEMENUID,SETCONFIG,RETURNLOGIN,OCMENUS,OCMENUS1,REQMENUS1,SHOWROLE,SHOWROLE1} from './mutation_types'

export default {
  //是否打开菜单
  ocmenus({commit}){
    commit(OCMENUS)
  },
  //手机端
  ocmenus1({commit},flag){
    commit(OCMENUS1,flag)
  },

  //获取菜单数组
  reqMenus1({commit},menus){
    commit(REQMENUS1,menus)
  },
  //选择菜单ID
  choiceMenuId({commit},id){
    commit(CHOICEMENUID,id)
  },

  //是否显示新增角色一栏
  showaddrole({commit},show){
    commit(SHOWROLE,show)
  },
  //是否修改角色一栏
  showfixrole({commit},show){
    commit(SHOWROLE1,show)
  },

  //设置路径名
  changePathNames({commit},path){
    commit(CHANCEPATHNAMES,{path})
  },

  //返回登录界面
  returnLogin({commit},path){
    commit(RETURNLOGIN,{path})
  },

  //设置令牌
  setConfig({commit},jwt){
    commit(SETCONFIG,{jwt})
  }
}
