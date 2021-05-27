export const PageNavComponent = (props) => {
  //array.length

  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <li
        class={`page-item ${props.isCurrentPage === number ? "active" : null}`}
      >
        <a class="page-link" href={number}>
          {number}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="..." style={{ display: "flex", justifyContent: "center" }}>
      <ul class="pagination pagination-mg">
        <li class="page-item">
          <a class="page-link" href={parseInt(props.pageref) - 1}>
            Previous
          </a>
        </li>

        {items}
        <li class="page-item">
          <a class="page-link" href={parseInt(props.pageref) + 1}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
