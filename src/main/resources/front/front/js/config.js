
var projectName = '智慧外贸平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '商品信息',
	url: './pages/shangpinxinxi/list.html'
}, 

{
	name: '公告资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot7l0u0/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"买家","menuJump":"列表","tableName":"maijia"}],"menu":"买家管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"商家","menuJump":"列表","tableName":"shangjia"}],"menu":"商家管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"商品分类","menuJump":"列表","tableName":"shangpinfenlei"}],"menu":"商品分类管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除","查看评论"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改","删除"],"menu":"商品预订","menuJump":"列表","tableName":"shangpinyuding"}],"menu":"商品预订管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","修改","删除","送仓申请"],"menu":"关单信息","menuJump":"列表","tableName":"guandanxinxi"}],"menu":"关单信息管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改","删除","运单制作"],"menu":"送仓申请","menuJump":"列表","tableName":"songcangshenqing"}],"menu":"送仓申请管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除","出口发票"],"menu":"运单信息","menuJump":"列表","tableName":"yundanxinxi"}],"menu":"运单信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除","订单信息"],"menu":"出口发票","menuJump":"列表","tableName":"chukoufapiao"}],"menu":"出口发票管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","查看评论","商品预订"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改","删除","支付"],"menu":"商品预订","menuJump":"列表","tableName":"shangpinyuding"}],"menu":"商品预订管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"关单信息","menuJump":"列表","tableName":"guandanxinxi"}],"menu":"关单信息管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"送仓申请","menuJump":"列表","tableName":"songcangshenqing"}],"menu":"送仓申请管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"运单信息","menuJump":"列表","tableName":"yundanxinxi"}],"menu":"运单信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看"],"menu":"出口发票","menuJump":"列表","tableName":"chukoufapiao"}],"menu":"出口发票管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","查看评论","商品预订"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"买家","tableName":"maijia"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除","查看评论"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改","删除","审核","关单"],"menu":"商品预订","menuJump":"列表","tableName":"shangpinyuding"}],"menu":"商品预订管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","修改","删除","送仓申请"],"menu":"关单信息","menuJump":"列表","tableName":"guandanxinxi"}],"menu":"关单信息管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改","删除","运单制作"],"menu":"送仓申请","menuJump":"列表","tableName":"songcangshenqing"}],"menu":"送仓申请管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除","出口发票"],"menu":"运单信息","menuJump":"列表","tableName":"yundanxinxi"}],"menu":"运单信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除","订单信息"],"menu":"出口发票","menuJump":"列表","tableName":"chukoufapiao"}],"menu":"出口发票管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","查看评论","商品预订"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"商家","tableName":"shangjia"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
