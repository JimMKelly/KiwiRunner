class Possum {
    constructor(velocity) {
        this.h = 40
        this.w = 86
        this.x = width;
        this.y = height - this.h;
        this.velocity = velocity
        this.frame_index = 0
        this.animation_speed = 0.1
        this.img1 = new Image();
        this.img1.src = "./assets/possum - 1.png";
        this.img2 = new Image();
        this.img2.src = "./assets/possum - 2.png";
        this.animation_frames = [this.img1,this.img2]
    }

    move() {
        this.x -= this.velocity;
    }

    show() {
        this.frame_index += this.animation_speed
        let frame = Math.round(this.frame_index)

        if (this.frame_index > this.animation_frames.length-1){
            this.frame_index = 0
        }
        
        this.img = this.animation_frames[frame]

        ctx.drawImage(this.img,this.x, this.y, this.w,this.h);

        //ctx.beginPath();
        //ctx.rect(this.x, this.y, this.w, this.h);
        //ctx.stroke();
    }

}