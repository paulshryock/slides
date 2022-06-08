---
title: Testing React Components
layout: cover
permalink: "./index.html"
---
{%- if slides %}
{%- for slide in slides %}
{%- if slide.cover == true %}
1. **[{{ slide.title }}](/{{ slide.index }}/):** {{ slide.description }}
{%- endif %}
{%- endfor %}
{%- endif %}
