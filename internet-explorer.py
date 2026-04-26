# ie8_mimic.py
import webbrowser
import os

# Path for temporary HTML file
file_path = os.path.abspath("ie8_mimic.html")

# Full IE8 HTML content (insert full 300-line content here)
html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IE8 Full Mimic</title>
<link rel="stylesheet" href="https://unpkg.com/xp.css">
<style>
/* Insert full CSS here from your 300-line version */
</style>
</head>
<body>
<div class="browser">
  <!-- Insert full IE8 HTML structure: title bar, toolbar, tabs, iframe -->
</div>

<script>
// Insert full 300-line JavaScript here
</script>
</body>
</html>
"""

# Write the HTML to a file
with open(file_path, "w", encoding="utf-8") as f:
    f.write(html_content)

# Open in default web browser
webbrowser.open("file://" + file_path)
