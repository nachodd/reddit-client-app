import timeAgo from "utils/timeAgo"

export default class RedditPost {
  constructor(post = {}) {
    this.id = post.id
    this.title = post.title
    this.author = post.author
    this.created = new Date(post.created * 1000)
    this.commentsNumber = post.num_comments
    this.thumbnail = post.thumbnail
    this.read = post.read || false
    this.dismissed = post.dismissed || false
  }

  get timeAgo() {
    return timeAgo.format(this.created)
  }
}
