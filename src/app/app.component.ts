import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, CommonModule,LazyLoadImageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  selectedTab = 'home';
  popupVisible: boolean = false;
  isHovered = false;
  isHovered2 = false;
  isHovered3 = false;
  isHovered4 = false;
  title = 'krish-portfolio';
  light = true;
  hover = false;
  backgroundColor = '#F8FCFF';
  blackbackgroundColor = '#0C3047'
  selectedStep = 1; // Default selected step
  currentIndex = 0;
  imageFrame = 'Black 1.svg';
  imageWhiteFrame = 'White 1.svg';
  password = false;
  close = false;
  closing = false;
  
  titleFrame = 'Discovery Call';
  sub = 'Understand client goals, target audience, and project requirements through an initial discussion.';
  fullText: { text: string; color: string }[] = [
    { text: 'I combine', color: 'black' },
    { text: 'creativity,', color: '#9B9B9B' },
    { text: 'user-focused', color: 'black' },
    { text: 'design,', color: 'black' },
    { text: 'and', color: 'black' },
    { text: 'strategy', color: '#9B9B9B' },
    { text: 'to', color: 'black' },
    { text: 'craft', color: 'black' },
    { text: 'exceptional,', color: 'black' },
    { text: 'seamless,', color: '#9B9B9B' },
    { text: 'and', color: 'black' },
    { text: 'impactful', color: '#9B9B9B' },
    { text: 'experiences.', color: 'black' }
  ];
  fullBlackText: { text: string; color: string }[] = [
    { text: 'I combine', color: 'white' },
    { text: 'creativity,', color: '#9B9B9B' },
    { text: 'user-focused', color: 'white' },
    { text: 'design,', color: 'white' },
    { text: 'and', color: 'white' },
    { text: 'strategy', color: '#9B9B9B' },
    { text: 'to', color: 'white' },
    { text: 'craft', color: 'white' },
    { text: 'exceptional,', color: 'white' },
    { text: 'seamless,', color: '#9B9B9B' },
    { text: 'and', color: 'white' },
    { text: 'impactful', color: '#9B9B9B' },
    { text: 'experiences.', color: 'white' }
  ];

  displayedSegments: { text: string; color: string }[] = [];
  displayedBlackSegments: { text: string; color: string }[] = [];
  typingSpeed = 300; // Adjust speed for words
  private index = 0;
  private interval: any;
  private interval2: any;
  private hasStarted = false;
  steps = [
    { id: 1, title: 'Discovery Call', color: '#F8FCFF', blackColor: '#0C3047', image: 'Black 1.svg',Whiteimage: 'White 1.svg' },
    { id: 2, title: 'Research & Analysis', color: '#FFF6FF', blackColor: '#460643', image: 'Black 2.svg',Whiteimage: 'White 2.svg' },
    { id: 3, title: 'Concept Ideation', color: '#FAFFF6', blackColor: '#0D1C00', image: 'Black 3.svg',Whiteimage: 'White 3.svg' },
    { id: 4, title: 'Wireframing & Prototyping', color: '#FFFEF6', blackColor: '#2D2907', image: 'Black 4.svg',Whiteimage: 'White 4.svg' },
    { id: 5, title: 'Design Execution', color: '#FFF9F6', blackColor: '#4E2007', image: 'Black 5.svg',Whiteimage: 'White 5.svg' },
    { id: 6, title: 'Testing & Feedback', color: '#F8F6FF', blackColor: '#22114C', image: 'Black 6.svg',Whiteimage: 'White 6.svg' },
    { id: 7, title: 'Delivery & Support', color: '#FFF6FD', blackColor: '#580D4A', image: 'Black 7.svg',Whiteimage: 'White 7.svg' }
  ];

  images: any[] = [
    { id: 1, name: 'image-1.svg' },
    { id: 2, name: 'image-2.svg' },
    { id: 3, name: 'image-3.svg' },
    { id: 4, name: 'image-4.svg' },
    { id: 5, name: 'image-5.svg' },
    { id: 6, name: 'image-6.svg' },
    { id: 7, name: 'image-7.svg' },
    { id: 8, name: 'image-8.svg' }
  ];
  experiences: Experience[] = [
    { title: 'Senior UI/UX Designer', duration: '2022 - On site - Full time', location: 'On site - Full time', active: true },
    { title: 'Product Designer', duration: '2021 - 2022 - Remote', location: 'Remote', active: true },
    { title: 'Design Research', duration: '2020 - On site - Full time', location: 'On site - Full time', active: true },
    { title: 'Operations', duration: '2018 - On site - Full time', location: 'On site - Full time', active: true },
    { title: 'Development', duration: '2018 - On site - Full time', location: 'On site - Full time', active: true },
    { title: 'Business operations', duration: '2018 - On site - Full time', location: 'On site - Full time', active: true },
  ];
  socialIcons = [
    { defaultSrc: 'linked-in.svg', hoverSrc: 'linked-in-black.svg', currentSrc: 'linked-in.svg', link: 'https://www.linkedin.com/in/krishnesh-ks-539600178/' },
    { defaultSrc: 'behance.svg', hoverSrc: 'behance-black.svg', currentSrc: 'behance.svg', link: 'https://www.behance.net/krishnesh_ks' },
    { defaultSrc: 'insta.svg', hoverSrc: 'insta-black.svg', currentSrc: 'insta.svg', link: 'https://www.instagram.com/krishneshks_/' },
    { defaultSrc: 'figma.svg', hoverSrc: 'figma-black.svg', currentSrc: 'figma.svg', link: 'https://bento.me/krishneshks' }
  ];
  isStopped = false;
  loaderPopuop: boolean = false;
  data: any;

  constructor(private renderer: Renderer2,
    private dataService: SharedService
  ) { }
  ngOnInit() {
    this.animateImages();
    this.renderer.addClass(document.body, 'white-mode');
    this.dataService.data$.subscribe(data => {
      this.data = data; 
      if(this.data ){
        this.password = false;
        
      }
    });
  }

  animateImages() {
    clearInterval(this.interval); // Clear any existing interval to restart animation
    this.currentIndex = 0; // Reset to the first image

    this.interval = setInterval(() => {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        clearInterval(this.interval); // Stop animation at the last image
      }
    }, 180);
  }
  modes() {
    this.light = !this.light;
    this.animateImages();
    this.isStopped = false;
    if (this.light) {
      this.renderer.removeClass(document.body, 'dark-mode');
      this.renderer.addClass(document.body, 'white-mode');
      this.dataService.updateTheme(false);
    } else {
      this.renderer.removeClass(document.body, 'white-mode');
      this.renderer.addClass(document.body, 'dark-mode');
      this.dataService.updateTheme(true)
    }

  }

  selectStep(step: number) {
    this.selectedStep = step;
    this.getSelectedImage()
  }
  changeImage(icon: any, isHover: boolean) {
    icon.currentSrc = isHover ? icon.hoverSrc : icon.defaultSrc;
  }
  navigateTo(url: string) {
    window.open(url); // Opens in a new tab
  }

  getSelectedImage() {
    this.imageFrame = this.steps.find(step => step.id === this.selectedStep)?.image || 'Black 1.svg';
    this.imageWhiteFrame = this.steps.find(step => step.id === this.selectedStep)?.Whiteimage || 'White 1.svg';
    this.titleFrame = this.steps.find(step => step.id === this.selectedStep)?.title || 'Discovery Call';
    if (this.light) {
      this.backgroundColor = this.steps.find(step => step.id === this.selectedStep)?.color || '#F8FCFF;';
    }
    if (!this.light) {
      this.blackbackgroundColor = this.steps.find(step => step.id === this.selectedStep)?.blackColor || '#0C3047;';
    }

  }
  startTyping() {
    if (this.light) {
      if (this.hasStarted) return;
    }
    this.hasStarted = true;
    this.displayedSegments = [];
    this.displayedBlackSegments = [];
    // Clear text before starting
    this.index = 0;
    clearInterval(this.interval2);

    this.interval2 = setInterval(() => {
      if (this.light) {
        this.hasStarted = false;
        if (this.index < this.fullText.length) {
          this.displayedSegments.push(this.fullText[this.index]);
          this.index++;
        } else {
          clearInterval(this.interval2);
        }
      }
      if (!this.light) {
        this.hasStarted = false;
        if (this.index < this.fullBlackText.length) {
          this.displayedBlackSegments.push(this.fullBlackText[this.index]);
          this.index++;
        } else {
          clearInterval(this.interval2);
        }
      }
    }, this.typingSpeed);
  }
  stopAnimation() {
    this.isStopped = true;
  }
  onHeaderChanged(newHeader: string) {
    this.selectedTab = newHeader;  // Update the selected tab when the child emits a value
  }

  showPopup(): void {
    this.loaderPopuop = true;
    this.close = false;
    this.closing = false;
    setTimeout(() => {
      this.popupVisible = true;
      this.loaderPopuop = false
    }, 1500);

  }

  // Close the popup when clicking the background
  closePopup(type: any): void {
    if (type === 'blur') {
      this.popupVisible = false;
    }
  }
  preventClose(event: Event): void {
    event.stopPropagation();  // Prevent the event from bubbling up
  }
  link(email:any) {
    const subject = encodeURIComponent("");
    const body = encodeURIComponent("");
    
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
}
 phone(phoneNumber:any) {
  phoneNumber = phoneNumber.replace(/\D/g, ""); 
  if (!phoneNumber.startsWith("+91")) {
      phoneNumber = "+91" + phoneNumber;
  }
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  
}

showPass(){
  this.password = true;
  window.scrollTo(0, 0); 
  this.dataService.updatePass('pass')
}
showClose(){
  this.close = true;
  this.closing = true;
}
showClosing(){
this.closing = false;
this.close = false;
}
}


interface Experience {
  title: string;
  duration: string;
  location: string;
  active: boolean;
}