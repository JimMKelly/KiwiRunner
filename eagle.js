class Eagle {
    constructor(velocity) {
        this.h = 57
        this.w = 89
        this.x = width;
        this.y = height/2;
        this.velocity = velocity
        this.frame_index = 0
        this.animation_speed = 0.2
        this.img1 = new Image();
        this.img1.src = "./assets/eagle - 1.png";
        this.img2 = new Image();
        this.img2.src = "./assets/eagle - 2.png";
        this.img3 = new Image();
        this.img3.src = "./assets/eagle - 3.png";
        this.animation_frames = [this.img1,this.img2,this.img3]
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