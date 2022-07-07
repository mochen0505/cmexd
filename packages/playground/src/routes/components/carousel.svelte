<script>
  import { Carousel } from '@cmexd/carousel';
  import { IconFont } from '@cmexd/icon';

  const data = ['111', '222', '333', '444', '555']
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .carousel-wrap {
    width: 900px;
  }
  .content-wrap {
    display: flex;
    justify-content: center;
  }
  .content {
    margin: 0 12px;
    width: 282px;
    height: 100px;
    border: 1px solid #ececec;
    border-radius: 12px;
    background-color: #fff;
  }
  .carousel-wrap :global(.icon) {
    width: 36px;
    height: 36px;
  }
</style>

<div class="carousel-wrap">
  <Carousel autoplay={3000}>
    {#each data as item}
      <div class="content-wrap">
        <div class="content">
          {item}
        </div>
      </div>
    {/each}
    <IconFont class="icon" slot="left-control" type="icon-arrow-left" />
    <IconFont class="icon" slot="right-control" type="icon-arrow-right" />
  </Carousel>
</div>

