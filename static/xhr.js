const _to = async promise => {
    try{
        let res = await promise
        return [null, res]
    }catch(err){
        return [err, null]
    }
}

const request = (opt) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        const baseUrl = '/api/v1/xhr'
        const { 
            url, 
            method, 
            data = null,
            isAsync = true 
        } = opt
        xhr.open(method, baseUrl + url, isAsync)

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText)
            }else{
                reject(xhr.responseText)
            }
        }

        if(method === 'POST' && data) {
            let formData = []
            for(let key in data) {
                formData.push(`${key}=${data[key]}`)
            }
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-rulencoded')
            xhr.send(fromData.join('&'))
            return
        }

        xhr.send(data)
    })
}

const get = async (url, opt = {}) => {
    return new Promise(async (resolve, reject) => {
        
        opt = Object.assign({
            url,
            method: 'GET'
        }, opt)
        
        let [err, res] = await _to(request(opt))
    
        if(err) {
            reject(err)
        }

        resolve(res)
    })
    
}

const post = async (url, data, opt = {}) => {
    return new Promise(async (resolve, reject) => {
        
        opt = Object.assign({
            url,
            method: 'POST',
            data
        }, opt)
        let [err, res] = await _to(request(opt))
    
        if(err) {
            reject(err)
        }

        resolve(res)
    })
}