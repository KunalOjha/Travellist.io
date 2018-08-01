import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { QuillModule } from "ngx-quill";
import { PostsService } from "./posts.service";
import { PostComponent } from "./components/post/post.component";
import { PostFormComponent } from "./components/post-form/post-form.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [PostFormComponent, PostComponent],
  imports: [SharedModule, RouterModule, QuillModule],
  exports: [PostFormComponent],
  providers: [PostsService]
})
export class PostsModule {}
