class Kiwi {
    constructor() {
        this.h = 75
        this.w = 75
        this.x = 50;
        this.y = height - this.h;
        this.vy = 0;
        this.gravity = 1.5;
        this.frame_index = 0
        this.animation_speed = 0.2;
        this.jumping = false;
        this.img1 = new Image();
        this.img1.src = "./assets/kiwi - 1.png";
        this.img2 = new Image();
        this.img2.src = "./assets/kiwi - 2.png";
        this.img3 = new Image();
        this.img3.src = "./assets/kiwi - 3.png";
        this.img4 = new Image();
        this.img4.src = "./assets/kiwi - 4.png";
        this.animation_frames = [this.img1,this.img2,this.img3];
    }

    jump() {
        if(this.y == height - this.h){
            this.jumping = true;
            this.vy = -20;
            jumpSound.play();
        }
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;

        if(this.y >= height - this.h) {
            this.y = height - this.h;
        }

        if(this.y == height - this.h){
            this.jumping = false;
        }
    }

    show() {
        this.frame_index += this.animation_speed
        let frame = Math.round(this.frame_index)

        if (this.frame_index > this.animation_frames.length-1){
            this.frame_index = 0
        }
        
        if (this.jumping){
            this.img = this.img4;
        }else{
            this.img = this.animation_frames[frame]
        }

        ctx.drawImage(this.img,this.x, this.y, this.w,this.h);
    }

    hits(enemy){
        if((this.x + this.w) >= (enemy.x)&&
        this.x <= (enemy.x + enemy.w) && 
        (this.y + this.h) >= enemy.y && 
        this.y <= (enemy.y + enemy.h)){
            return true;
        }
    }
}