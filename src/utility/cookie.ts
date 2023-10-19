import cookie from "cookiejs";
import CryptoJS from "crypto-js";
import env from "@/config/env";

export function setCookieItem(key: string, value: any) {
  cookie.set(key, encryptData(value), 1);
}

export function getCookieItem(key: string) {
  const value = cookie.get(key);

  if (typeof value === "string") {
    return decryptData(value);
  }
  return null;
}

export function encryptData(data: any): string {
  const dataString: string = JSON.stringify(data);
  const encryptedData: string = env.encryption_key
    ? CryptoJS.AES.encrypt(dataString, env.encryption_key).toString()
    : "";

  return encryptedData;
}

export function decryptData(encryptedData: string): any {
  const decryptedData: string = env.encryption_key
    ? CryptoJS.AES.decrypt(encryptedData, env.encryption_key).toString(
        CryptoJS.enc.Utf8
      )
    : "";
  const data: any = JSON.parse(decryptedData);

  return data;
}
