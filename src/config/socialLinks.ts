// Social Links Configuration - uses environment variables only
export const socialLinks = {
  // Main social profiles
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/ChairunnisaYasfa',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/chairunnisayasfag/',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/naneunchaa_',
  email: import.meta.env.VITE_EMAIL || 'chairunnisa135077@gmail.com',
  
  // GitHub repository URLs
  repositories: {
    projectOne: import.meta.env.VITE_GITHUB_PROJECT1_URL,
    projectTwo: import.meta.env.VITE_GITHUB_PROJECT2_URL,
    projectThree: import.meta.env.VITE_GITHUB_PROJECT3_URL,
    projectFour: import.meta.env.VITE_GITHUB_PROJECT4_URL,
  },
  
  // Formatted display names (extracted from environment variables)
  display: {
    github: (import.meta.env.VITE_GITHUB_URL || 'https://github.com/ChairunnisaYasfa').replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, ''),
    linkedin: (import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/chairunnisayasfag/').replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, ''),
    instagram: (import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/naneunchaa_').replace(/^https?:\/\/(www\.)?instagram\.com\//, '').replace(/\/$/, ''),
    email: import.meta.env.VITE_EMAIL || 'chairunnisa135077@gmail.com',
  }
};

export default socialLinks;