import axios from "axios" 
axios.defaults.baseURL = "http://localhost:8080/api/test" 
 export default{ //모든 글 불러오기 
    getAllPosts(){ return axios.get('') } //글 작성하기 
    
 }
