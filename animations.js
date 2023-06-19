/* Add a fade-in animation to the section#home */
section#home {
  animation: fade-in 1s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Add a slide-up animation to the services */
.service {
  animation: slide-up 1s ease-in-out;
}

@keyframes slide-up {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
