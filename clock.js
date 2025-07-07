// displays local time
class Clock {
    /**
     * @param {HTMLElement} block - output time 
     * @param {string} template - for hours the letter h, minutes m, seconds s. template "h : m : s" - will display "21 : 20 : 19"
     */
    constructor(block, template = 'h : m : s') {
        this.block = block
        this.template = template
    }
  
    render() {
        const date = new Date()
  
        const time = this.template
            .replace('h', String(date.getHours()).padStart(2, '0'))
            .replace('m', String(date.getMinutes()).padStart(2, '0'))
            .replace('s', String(date.getSeconds()).padStart(2, '0'))

        this.block.textContent = time
    }
  
    stop() {
        clearInterval(this.timer)
    }
  
    start() {
        this.timer = setInterval(() => this.render(), 1000)
    }
}