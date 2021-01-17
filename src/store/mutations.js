import {CHANCEPATHNAMES, CHOICEMENUID, RETURNLOGIN, SETCONFIG,OCMENUS,OCMENUS1,REQMENUS1,SHOWROLE,SHOWROLE1} from './mutation_types'

export default {
  //折叠菜单
  [OCMENUS](state){
    state.isCollapse = !state.isCollapse
  },
  [OCMENUS1](state,flag){
    state.isCollapse = flag
  },

  //获取菜单数组
  [REQMENUS1](state,menus){
    state.menus = menus
  },
  //改变菜单ID
  [CHOICEMENUID](state,id){
    state.menuId = id
  },

  //是否显示新增角色一栏
  [SHOWROLE](state,show){
    state.showrole = show
  },
  //是否显示修改角色一栏
  [SHOWROLE1](state,show){
    state.showrole1 = show
  },

  //返回登录界面
  [RETURNLOGIN](state,{yon}){
    state.returnlogin = yon
  },

  //改变路径名字
  [CHANCEPATHNAMES](state,{path}){
    state.pathnames = path
  },

  //设置令牌
  [SETCONFIG](state,{jwt}){
    state.config = jwt
  },
}
