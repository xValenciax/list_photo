export default class Photo {
  #id;
  #username;
  #profilePhotoLink;
  #photoLink;
  #photoName;
  #LikesCount;
  #photoDesc;

  constructor(
    id = "",
    username = "",
    profilePhotoLink = "",
    photoLink = "",
    photoName = "",
    LikesCount = "",
    photoDesc = ""
  ) {
    this.#id = id;
    this.#username = username;
    this.#profilePhotoLink = profilePhotoLink;
    this.#photoLink = photoLink;
    this.#photoName = photoName;
    this.#LikesCount = LikesCount;
    this.#photoDesc = photoDesc;
  }

  getID() {
    return this.#id;
  }
  getUsername() {
    return this.#username;
  }
  getProfilePhoto() {
    return this.#profilePhotoLink;
  }
  getPhoto() {
    return this.#photoLink;
  }
  getphotoName() {
    return this.#photoName;
  }
  getLikes() {
    return this.#LikesCount;
  }
  getDesc() {
    return this.#photoDesc;
  }
}
