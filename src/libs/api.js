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
    throw new Error("Failed to fetch Projects Data \n" + err);
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
    throw new Error("Failed to fetch About Data \n" + err);
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
    throw new Error("Failed to fetch Discord Presence Data \n" + err);
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
    } catch (error) {
      throw new Error("Failed to fetch Coding Activity (WakaTime) \n" + error);
    }
  },
  allTime: async () => {
    try {
      const res = await wakatimeFetcher(
        "https://wakatime.com/api/v1/users/current/all_time_since_today"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch All Time Stats (WakaTime) \n" + error);
    }
  },
  insights: async () => {
    try {
      const res = await wakatimeFetcher(
        "https://wakatime.com/api/v1/users/current/insights/weekdays/last_year"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch Insights (WakaTime) \n" + error);
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
    } catch (error) {
      throw new Error("Failed to fetch Durations (WakaTime) \n" + error);
    }
  },
  stats: async () => {
    try {
      const res = await wakatimeFetcher(
        "https://wakatime.com/api/v1/users/current/stats"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch Stats (WakaTime) \n" + error);
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
      throw new Error("Failed to fetch LastFM Data \n" + err);
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
      throw new Error("Failed to fetch LastFM Data \n" + err);
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
    throw new Error("Failed to fetch Anilist Data \n" + err);
  }
}
