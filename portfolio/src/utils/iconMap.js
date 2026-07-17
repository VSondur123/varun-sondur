/**
 * Maps icon string names (stored in JSON) to actual react-icons components.
 * Add new icons here as needed without changing any other files.
 */
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaDatabase,
  FaCloud,
  FaTools,
  FaTrophy,
  FaRocket,
  FaStar,
  FaMedal,
  FaVial,
  FaLayerGroup,
  FaNetworkWired,
  FaProjectDiagram,
  FaDownload,
  FaExternalLinkAlt,
  FaArrowUp,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaGlobe,
} from 'react-icons/fa';

const iconMap = {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaDatabase,
  FaCloud,
  FaTools,
  FaTrophy,
  FaRocket,
  FaStar,
  FaMedal,
  FaVial,
  FaLayerGroup,
  FaNetworkWired,
  FaProjectDiagram,
  FaDownload,
  FaExternalLinkAlt,
  FaArrowUp,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaGlobe,
};

/**
 * Returns the icon component for a given icon name string.
 * Falls back to FaCode if the icon is not found.
 */
export function getIcon(name) {
  return iconMap[name] || FaCode;
}

export default iconMap;
