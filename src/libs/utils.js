import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import languageColors from "../data/languages.json";
import editorColors from "../data/editors.json";

const languageColorCache = {};
const editorColorCache = {};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getLocalTime(unix_timestamp) {
  var date = new Date(unix_timestamp * 1000);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return year + "-" + month + "-" + day;
}

export function calculateTimeElapsed(timestamp) {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifference = currentTime - timestamp;

  const days = Math.floor(timeDifference / (60 * 60 * 24));
  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(timeDifference / (60 * 60));
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  const minutes = Math.floor(timeDifference / 60);
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  return "Just now";
}

export function parseValueforHeatMap(array) {
  var result = [];
  array.forEach((element) => {
    result.push({
      categories: element.categories,
      date: element.date.split("-").join("/"),
      count: Math.floor(element.total / 60),
    });
  });
  return result;
}

export function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

export function getLanguageColor(language) {
  if (languageColorCache[language]) {
    return languageColorCache[language];
  }

  const { data } = languageColors;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === language) {
      const color = data[i].color || "#dadada";
      languageColorCache[language] = color;
      return color;
    }
  }

  return "#dadada";
}

export function getEditorColor(editor) {
  if (editorColorCache[editor]) {
    return editorColorCache[editor];
  }

  const { data } = editorColors;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === editor) {
      const color = data[i].color || "#dadada";
      editorColorCache[editor] = color;
      return color;
    }
  }

  return "#dadada";
}

export function convertSecsToHrsAndMins(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  let result = "";
  if (hours > 0) {
    result += `${hours} hours `;
  }
  if (minutes > 0) {
    result += `${minutes} minutes`;
  }
  if (result === "") {
    result = "Less than a minute";
  }

  return result;
}

export async function wakatimeFetcher(url) {
  if (!import.meta.env.VITE_PROXY_SERVER_URL)
    return await fetch(url, {
      headers: {
        Authorization: `Basic ${btoa(import.meta.env.VITE_WAKATIME_API_KEY)}`,
      },
    });
  return await fetch(import.meta.env.VITE_PROXY_SERVER_URL + url, {
    headers: {
      Authorization: `Basic ${btoa(import.meta.env.VITE_WAKATIME_API_KEY)}`,
    },
  });
}
