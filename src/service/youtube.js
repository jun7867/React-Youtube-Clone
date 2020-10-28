class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet,statistics",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    // 이 과정을 하는 이유는 search API에서 video id가 mostPopular와는 달리 object로 한단계 더 들어가야 되기 때문.
  }

  async search_statistic(id) {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });
    // console.log(response.data.items);
    return response.data.items[0];
  }
}

export default Youtube;
