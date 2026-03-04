import os
import re

def quote_value(val):
    val = val.strip()
    # Remove existing quotes if present
    if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
        val = val[1:-1]
    # Escape internal quotes
    val = val.replace('"', '\\"')
    return f'"{val}"'

src_dir = 'g:/Programas/AI-XP-Playbook/src/posts'

for f in os.listdir(src_dir):
    if not f.endswith('.md'): continue
    path = os.path.join(src_dir, f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    parts = content.split('---\n', 2)
    if len(parts) >= 3:
        fm = parts[1]
        lines = fm.split('\n')
        new_lines = []
        for line in lines:
            if line.startswith('title:'):
                key, val = line.split('title:', 1)
                new_line = f'title: {quote_value(val)}'
                new_lines.append(new_line)
            elif line.startswith('description:'):
                key, val = line.split('description:', 1)
                new_line = f'description: {quote_value(val)}'
                new_lines.append(new_line)
            else:
                new_lines.append(line)
        
        parts[1] = '\n'.join(new_lines)
        new_content = '---\n'.join(parts)
        
        with open(path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        
        print(f"Fixed {f}")
