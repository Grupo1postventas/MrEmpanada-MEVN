<template>
  <b-container>
    <div class="bebidas">
      <div class="container mt-5">
        <b-card
          no-body
          class="overflow-hidden"
          style="max-width: 1000px"
          bg-variant="warning"
          align="center"
        >
          <b-card-body title="Horizontal Card">
            <b-card-text>
              Bebidas
            </b-card-text>
          </b-card-body>
        </b-card>
      </div>
    </div>

    <div class="bebidas">
      <div class="container mt-5">
        <b-card no-body class="overflow-hidden" style="max-width: 1000px">
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="mr chorizo">
                <b-card-text>
                  Descripción de mr chorizo
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <br>
        <b-card no-body class="overflow-hidden" style="max-width: 1000px">
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="mr chorizo">
                <b-card-text>
                  Descripción de mr chorizo
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </b-container>
</template>