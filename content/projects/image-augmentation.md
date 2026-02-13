---
title: "Image Augmentation with Depth Map"
thumbnail: "/images/Projects/ImageAug/Display_pic.png"
date: "2024"
linked: false
---

**Columbia University, Center for Smart Streetscapes (NSF ERC) | Fall 2024**  


Synthetic data for autonomous driving typically lacks geometric realism — backgrounds are composited without respecting scene depth, producing implausible occlusion and scale. We address this by conditioning image generation on metric depth maps, using depth as a geometric scaffold so that synthesized objects and backgrounds remain consistent with the 3D structure of the scene.

I developed a depth-conditioned image augmentation pipeline combining Stable Diffusion, ControlNet-depth, and Depth Anything to generate geometrically consistent synthetic driving data at scale. The pipeline takes a real traffic frame and its metric depth estimate, then synthesizes scene variations (weather, lighting, object appearance) that respect the original geometry — preserving occlusion boundaries and perspective-correct scale across generated samples.

The augmented data was used to expand the training set for a YOLOv10-based 3D object detection and pose estimation pipeline, improving generalization across camera setups and environmental conditions.

**Code & Data:** Available upon request

<!-- MORE -->