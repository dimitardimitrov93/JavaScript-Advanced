function solve() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let inheritedPrintLine = super.toString();
            if (this.comments.length > 0) {
                inheritedPrintLine += `\nRating: ${this.likes - this.dislikes}\nComments:\n * ${this.comments.join('\n * ')}`;
            } else {
                inheritedPrintLine += `\nRating: ${this.likes - this.dislikes}`;
            }

            return inheritedPrintLine;
        }
    }
 
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let inheritedPrintLine = super.toString();
            inheritedPrintLine += `\nViews: ${this.views}`;
            return inheritedPrintLine;
        }
    }
    
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}

solve();