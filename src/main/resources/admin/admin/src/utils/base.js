const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot7l0u0/",
            name: "springboot7l0u0",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot7l0u0/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智慧外贸平台"
        } 
    }
}
export default base
