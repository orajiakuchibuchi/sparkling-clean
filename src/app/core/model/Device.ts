export interface Device {
  userAgent: string;
  os: string;
  browser: string;
  device: string;
  os_version: string;
  browser_version: string;
  deviceType: string;
  orientation: string;
  screenWidth?: number;
  networkStatus?: string;
}

