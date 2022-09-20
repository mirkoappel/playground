let parser = new DOMParser();
let html = parser.parseFromString(/* html */`
    <html>
    <head></head>
    <body networked>
    <h1>Hello World 1</h1>
    <script defer type="module" src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <script defer type="module" src="https://unpkg.com/networked-aframe@0.10.1/dist/networked-aframe.min.js"></script>
    
    <script>console.log("message B ")</script>
    <script>console.log("message C ")</script>
    </body>
    </html>
`, 'text/html');

document.body = html.body;


let scripts = document.body.getElementsByTagName("script");

for(let script of scripts) {
    console.log(script);
    const clone = document.createElement('script');
    
    for(let attr of script.attributes) {
        clone.setAttribute(attr.name, attr.value)
    }   
    
    clone.textContent = script.textContent;
    script.parentNode.replaceChild(clone, script);
};


