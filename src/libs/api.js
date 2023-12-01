import { wakatimeFetcher } from "./utils";

export async function getPinnedGHRepo() {
  try {
    const res = await fetch(
      "https://gh-pinned-repos.egoist.dev/?username=a1x5h04"
    );
    const data = await res.json();
    if (data.length > 0) {
      return data;
    } else {
      const res = await fetch(
        "https://my-json-server.typicode.com/a1x5h04/a1x5h04/project_repos"
      );
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.log("Pinned Repo" + err);
    throw new Error("Failed to fetch Pinned Repo");
  }
}

export async function getAbout() {
  try {
    const res = await fetch(
      "https://my-json-server.typicode.com/a1x5h04/a1x5h04/about_list"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("About Data" + err);
    throw new Error("Failed to fetch About Data");
  }
}

export async function getDiscordPresence() {
  try {
    const res = await fetch(
      "https://api.lanyard.rest/v1/users/707276372875149375"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Discord Presence" + err);
    throw new Error("Failed to fetch Discord Presence");
  }
}

export const getWakaTimeData = {
  activity: async () => {
    try {
      const res = await fetch(
        "https://wakatime.com/share/@018b8b83-092a-4620-ad44-cd317f671427/fec85567-1997-4ac4-ab80-d1ffbe3a3af6.json"
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("WakaTime Activity" + err);
      throw new Error("Failed to fetch WakaTime Activity");
    }
  },
  allTime: async () => {
    try {
      const res = await wakatimeFetcher(
        "https://wakatime.com/api/v1/users/current/all_time_since_today"
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("WakaTime Total Time" + err);
      throw new Error("Failed to fetch WakaTime Total Time");
    }
  },
  insights: async () => {
    try {
      const res = await wakatimeFetcher(
        "https://wakatime.com/api/v1/users/current/insights/weekdays/last_year"
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("WakaTime Insights" + err);
      throw new Error("Failed to fetch WakaTime Insights");
    }
  },
  durations: async () => {
    try {
      const res = await wakatimeFetcher(
        `https://wakatime.com/api/v1/users/current/durations?date=${new Date()
          .toISOString()
          .slice(0, 10)}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("WakaTime Durations" + err);
      throw new Error("Failed to fetch WakaTime Durations");
    }
  },
  stats: async () => {
    try {
      const res = await wakatimeFetcher(
        "https://wakatime.com/api/v1/users/current/stats"
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("WakaTime Statistics" + err);
      throw new Error("Failed to fetch WakaTime Statistics");
    }
  },
};

export const getLastFMData = {
  recentTracks: async () => {
    try {
      const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=a1x5h04&api_key=${
          import.meta.env.VITE_LASTFM_API_KEY
        }&format=json&limit=1`
      );
      const data = await res.json();
      return data.recenttracks;
    } catch (err) {
      console.log("LastFM Recent Tracks" + err);
      throw new Error("Failed to fetch LastFM Recent Tracks");
    }
  },
  topTracks: async () => {
    try {
      const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&user=a1x5h04&api_key=${
          import.meta.env.VITE_LASTFM_API_KEY
        }&format=json&limit=3`
      );
      const data = await res.json();
      return data.toptracks;
    } catch (err) {
      console.log("LastFM Top Tracks" + err);
      throw new Error("Failed to fetch LastFM Top Tracks");
    }
  },
};

export async function getAnilistData() {
  try {
    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `query {
                    MediaListCollection(userName: "a1x5h04", forceSingleCompletedList: true, 
                      type: ANIME, status: CURRENT, sort: UPDATED_TIME_DESC) {
                      lists {
                        entries {
                          updatedAt,
                          id,
                          progress,
                          media {
                            seasonYear,
                            episodes,
                            coverImage {
                              large
                            }
                            title {
                              native,
                              english,
                            }
                          }
                        }
                      }
                    }
                  }`,
      }),
    });
    const data = await res.json();
    return data.data.MediaListCollection.lists[0].entries[0];
  } catch (err) {
    console.log("Anilist Data" + err);
    throw new Error("Failed to fetch Anilist Data");
  }
}
