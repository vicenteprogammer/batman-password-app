export default function generatePass() {
    let password:string = '';

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%¨&!palskdnfkdk'
    let passLength = 8

    for (let i = 0; i<= passLength; i++){
        password += chars[Math.floor(Math.random() * chars.length)]
    }

    return password
} 