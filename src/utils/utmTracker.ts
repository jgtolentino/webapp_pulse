/**
 * UTM Tracker utility for tracking marketing campaign parameters
 */

// Interface for UTM parameters
export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

// Save UTM parameters to localStorage
export const saveUTMParams = (): void => {
  if (typeof window === 'undefined') return;
  
  const url = new URL(window.location.href);
  const utmParams: UTMParams = {};
  let hasUTMParams = false;
  
  // Check for UTM parameters in the URL
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
    const value = url.searchParams.get(param);
    if (value) {
      utmParams[param as keyof UTMParams] = value;
      hasUTMParams = true;
    }
  });
  
  // Only save if UTM parameters are present
  if (hasUTMParams) {
    // Save UTM parameters to localStorage
    localStorage.setItem('utm_params', JSON.stringify(utmParams));
    
    // Save timestamp
    localStorage.setItem('utm_timestamp', Date.now().toString());
    
    // Track this in LinkedIn if available
    if (window.lintrk) {
      window.lintrk('track', { 
        conversion_id: 'utm-campaign-visit',
        custom_parameters: utmParams
      });
    }
  }
};

// Get stored UTM parameters
export const getUTMParams = (): UTMParams | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const storedParams = localStorage.getItem('utm_params');
    return storedParams ? JSON.parse(storedParams) : null;
  } catch (e) {
    console.error('Error retrieving UTM parameters:', e);
    return null;
  }
};

// Check if UTM parameters are from a specific source
export const isFromUTMSource = (source: string): boolean => {
  const params = getUTMParams();
  return params?.utm_source === source;
};

// Track a conversion with UTM data
export const trackConversionWithUTM = (conversionId: string): void => {
  if (typeof window === 'undefined') return;
  
  const utmParams = getUTMParams();
  
  // Track in LinkedIn
  if (window.lintrk) {
    window.lintrk('track', { 
      conversion_id: conversionId,
      custom_parameters: utmParams || {}
    });
  }
};

// Define type for global window object with LinkedIn tracking
declare global {
  interface Window {
    lintrk?: (action: string, data: any) => void;
  }
}

export default {
  saveUTMParams,
  getUTMParams,
  isFromUTMSource,
  trackConversionWithUTM
};