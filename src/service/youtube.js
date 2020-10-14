class Youtube {
    constructor(key) {
        this.key=key
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    async mostPopular() {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
                this.getRequestOptions
            );
            const result = await response.json();
            return result.items;
        } catch (error) {
            return console.log('error', error);
        }
    }
    async search(query) {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId })); // 이 과정을 하는 이유는 search API에서 video id가 object로 한단계 더 들어가야 되기 때문.
            
    }

}

export default Youtube;