let id =parseInt( window.localStorage.getItem('id')||'5')
function createId(){
    id++
    window.localStorage.setItem('id',id.toString())
    return id
}
export default createId