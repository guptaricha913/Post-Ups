import { HttpClient } from "@angular/common/http";
import { ConstantsService } from "./constants.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  getFeed(feed) {
    return this.http.post(ConstantsService.BASE_URL + "/getFeed", feed);
  }
  getPostById(postId, updateViewCount) {
    return this.http.get(
      ConstantsService.BASE_URL + "/getPost/" + postId + "/" + updateViewCount
    );
  }
  postComment(postId, comment) {
    return this.http.post(ConstantsService.BASE_URL + "/submitComment", {
      postId: postId,
      comment: comment,
    });
  }

  likeThisPost(postId) {
    return this.http.post(
      ConstantsService.BASE_URL + "/updateLikes/" + postId,
      {}
    );
  }

  filterThroughPosts(tag) {
    return this.http.post(ConstantsService.BASE_URL + "/filter", {
      tag: tag,
    });
  }

  constructor(private http: HttpClient) {}
}
