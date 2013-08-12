module SignUpsHelper
  def share_url(network, options)
    if network == :facebook
    query = {
        u: options[:url]
    }.to_query
    "https://www.facebook.com/sharer/sharer.php?#{query}"
    else
      query = {
          text: options[:text],
          url: options[:url]
      }.to_query
      "https://twitter.com/share?#{query}"
    end
  end
end