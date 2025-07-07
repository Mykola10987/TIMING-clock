displays local time

example:
```javascript
let q = new Clock(
    document.querySelector('#timer'),
    'h:m:s'
)

q.start()

q.stop()
```