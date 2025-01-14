# Frontend Guide for Organization Website

## Theme and Vibe
The website should have a **skeleton/horror-themed design** with dark, eerie, and unsettling vibes. Use a combination of **dark backgrounds, subtle glowing effects**, and animations to create an immersive and spooky atmosphere.

## Rendering Effect
- A **skeleton image** should appear at the center of the screen during page load.
- The skeleton image will "cut through" the middle of the screen (with an animation resembling a slicing or fade effect).
- Once the animation is complete, the main content of the website should be revealed.

This effect should be achieved using **CSS animations** and **JavaScript logic** for timing and transitions.

## Frontend Stack
- **HTML5**: Structure the webpage layout.
- **CSS3**: Style the components, handle the skeleton/horror theme, and define animations.
- **JavaScript**: Add dynamic behavior, such as the rendering effect logic.
- **Next.js**: Build the website with server-side rendering (SSR) and routing for a smooth experience.

## Page Structure
1. **Homepage**: A dark, spooky hero section with a headline and a skeleton illustration.
2. **About Page**: Description of the organization styled with eerie fonts and dark visuals.
3. **Services Page**: List services in cards with horror-themed icons (e.g., skeletons, bats, shadows).
4. **Contact Page**: A contact form with glowing input fields and a submit button styled for the horror theme.

## Styling and Animations
- Use a **dark theme** with horror-style colors:
  - **Background:** Dark gray or black.
  - **Primary colors:** Subtle glowing red, gray, and white tones.
  - **Accent colors:** Muted or faded shades.
- Implement **hover effects** on buttons and links (e.g., glowing or pulsing).
- Use **keyframe animations** for the rendering effect and transitions.

## Rendering Effect Implementation
- **Skeleton Animation**: Create a full-screen overlay with the skeleton image.
- Use **CSS keyframes** to animate the skeleton slicing or fading out.
- Trigger the animation on page load using **JavaScript** and remove the overlay after completion.

## Deployment
Host the website on **Vercel** for seamless deployment and server-side rendering support.
