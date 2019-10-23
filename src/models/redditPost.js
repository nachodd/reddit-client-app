import timeAgo from "utils/timeAgo"
import { date } from "quasar"

export default class RedditPost {
  constructor(post = {}) {
    this.id = post.id
    this.title = post.title
    this.author = post.author
    this.created = new Date(post.created * 1000)
    this.commentsNumber = post.num_comments
    this.thumbnail = post.thumbnail === "default" ? null : post.thumbnail
    this.read = post.read || false
    this.dismissed = post.dismissed || false
    this.url = post.url
    this.permalink = `https://reddit.com${post.permalink}`
  }

  get timeAgo() {
    return timeAgo.format(this.created)
  }
  get hasThumnail() {
    return this.thumbnail !== null
  }
  get isDismissed() {
    return this.dismissed === true
  }
  get createdAtFormatted() {
    return date.formatDate(this.created, "MM/DD HH:mm")
  }
}
