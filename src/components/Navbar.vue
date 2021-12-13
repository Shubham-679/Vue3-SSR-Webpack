<template>
  <div class="container">
    <header style="height: 26px">
      <div class="col-md-12" style="min-height: 30px">
        <div class="float-end">
          <ul class="list-group list-group-horizontal list-inline">
            <li class="px-3">
              <span class="">
                <i class="bi bi-telephone"></i>
              </span>
              <span class="px-1">1860 123 1000</span>
            </li>
            <li class="px-3">
              <span>
                <i class="bi bi-geo-alt"></i>
                <span class="px-1">56004, Banglore</span>
              </span>
            </li>
            <li class="px-3">
              <span>
                <i class="bi bi-person"></i>
                <span class="px-1">Login/Sign Up</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="container mb-3">
      <div class="row">
        <div class="col-2">
          <img src="../assets/bb_logo.png" />
        </div>
        <div class="col-6">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="col-4">
          <div class="float-end" style="background-color:#F2F2F2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-bucket"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"
                />
              </svg>
                <span>My Busket</span>
                <div>
                <span>0 item</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.list-inline {
  list-style: outside none none;
  margin-bottom: 0;
  margin-left: -5px;
  padding-left: 0;
}
.search-icon {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>
