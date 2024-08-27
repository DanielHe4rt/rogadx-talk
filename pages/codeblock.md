
---



## Example with Axum

<div class='grid grid-cols-3 gap-4'>

<div class='col-span-2'>

```rust
use http::StatusCode;
use axum::response::{Html, ErrorResponse};
use crate::types::PageError;

pub async fn show_post(
 // Params...
) -> Result<Html<String>, ErrorResponse> {
 // Code...
 let post = get_detailed_post_by_slug(slug, &db)
        .await
        .map_err(PageError::EdgeDBQueryError)?
        .ok_or((StatusCode::NOT_FOUND, "No post at this URL"))?;
 // Code...
}
```

where

```rust
async fn get_detailed_post_by_slug(slug: String, client: &Client)
-> Result<Option<DetailedBlogPost>, edgedb_tokio::Error>
```

</div>

<div>

- `edgedb_tokio::Error` does not implement `IntoResponse`{.text-yellow-700 .dark:text-yellow-500} trait.

  ðŸ¡† Use `map_err`{.text-blue-500} to convert it to `PageError`.

- "No data" is commonly treated as error.

  ðŸ¡† Use `ok_or`{.text-blue-500} to convert `None`{.text-gray-500 .dark:text-gray-300} to `Err`{.text-red-500} (`Option` to `Result`).

- `(StatusCode, "string")` tuple implements `IntoResponse`{.text-yellow-700 .dark:text-yellow-500} trait.

</div>

</div>
