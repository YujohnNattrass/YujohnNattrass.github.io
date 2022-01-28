document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.img-link').forEach(e => {
   e.addEventListener('click', () => {
    umami('able picture click');
     window.open('https://www.able-test.com/case', '_blank');
   });
  });

  document.getElementById('linkedin').addEventListener('click', () => {
    umami('linkedin button click');
  });

  document.getElementById('github').addEventListener('click', () => {
    umami('github button click');
  });

  document.getElementById('resume').addEventListener('click', () => {
    umami('resume button click');
  });
});