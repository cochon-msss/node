$(() => {
  $(".compare").on("click", function () {
    window.location.href = `/carCompare`;
  });

  $(".logo").on("click", function () {
    window.location.href = `/`;
  });

  $(".community").on("click", function () {
    window.location.href = `/community`;
  });
});
