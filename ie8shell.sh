# ie8_mimic.py
import webbrowser
import tempfile
import os

# Create a temporary HTML file
with tempfile.NamedTemporaryFile(delete=False, suffix=".html") as tmp:
    html_file = tmp.name
    tmp.write(b"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IE8 Full Mimic</title>
<link rel="stylesheet" href="https://unpkg.com/xp.css">
<style>
/* --- Insert your full 300-line IE8 CSS here --- */
body { margin:0; font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif; background:#808080; display:flex; justify-content:center; align-items:center; height:100vh;}
.browser { width:90%; height:80vh; display:flex; flex-direction:column; border:2px solid #808080; background:#c0c0c0; box-shadow:3px 3px 8px rgba(0,0,0,0.3);}
</style>
</head>
<body>
<div class="browser">
  <!-- --- Insert full HTML IE8 mimic here: title bar, toolbar, tabs, iframe --- -->
</div>

<script>
// --- Insert full 280-line JavaScript here ---
// Back/Forward SVG, Tabs, New Tab, InPrivate, Address bar, Google search
</script>
</body>
</html>
""")

# Open in default browser
webbrowser.open("file://" + os.path.abspath(html_file))
