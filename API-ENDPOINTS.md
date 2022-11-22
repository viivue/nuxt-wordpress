# API Endpoints

## /prefix/namespace/info

```json
{
  "favicon": "https://vinzan.mochisandbox.com/wp-content/uploads/2022/09/cropped-favicon.png",
  "name": "Vinzan",
  "description": "",
  "url": "https://vinzan.mochisandbox.com",
  "language": "en-US",
  "version": "6.0.2",
  "front_page_id": "7",
  "page_for_posts": "43",
  "api_prefix": "eevee-json",
  "api_namespace": "eevee/v1",
  "api_url": "https://vinzan.mochisandbox.com/eevee-json/eevee/v1"
}
```

## /prefix/namespace/menu

```json
{
  "ok": false,
  "message": "Please provide menu location or ID"
}
```

## /prefix/namespace/menu/id=1

### Fail

```json
{
  "ok": true,
  "items": false
}
```

### Success

```json
{
  "ok": true,
  "items": [
    {
      "ID": 50,
      "post_author": "1",
      "post_date": "2022-10-03 09:10:37",
      "post_date_gmt": "2022-09-06 04:32:02",
      "post_content": "",
      "post_title": "About us",
      "post_excerpt": "",
      "post_status": "publish",
      "comment_status": "closed",
      "ping_status": "closed",
      "post_password": "",
      "post_name": "50",
      "to_ping": "",
      "pinged": "",
      "post_modified": "2022-10-03 09:10:37",
      "post_modified_gmt": "2022-10-03 09:10:37",
      "post_content_filtered": "",
      "post_parent": 0,
      "guid": "https://vinzan.mochisandbox.com/?p=50",
      "menu_order": 1,
      "post_type": "nav_menu_item",
      "post_mime_type": "",
      "comment_count": "0",
      "filter": "raw",
      "db_id": 50,
      "menu_item_parent": "0",
      "object_id": "37",
      "object": "page",
      "type": "post_type",
      "type_label": "Page",
      "url": "https://vinzan.mochisandbox.com/about-us/",
      "title": "About us",
      "target": "",
      "attr_title": "",
      "description": "",
      "classes": [
        ""
      ],
      "xfn": ""
    }
  ]
}
```

## /prefix/namespace/menu/location=main-menu