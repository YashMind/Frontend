import Markdown from "react-markdown";
import sanitizeHtml from "sanitize-html";

const ContentRenderer = ({ content }: { content: any }) => {
    // Check if the content contains HTML tags by looking for '<' and '>'
    if (!content || typeof content !== 'string') return null
    const isHtml = /<[a-z][\s\S]*>/i.test(content);

    // Function to sanitize HTML content
    const sanitizeContent = (htmlContent: any) => {
        return sanitizeHtml(htmlContent, {
            allowedTags: [
                // Allow only specific tags
                "a",
                "b",
                "i",
                "u",
                "em",
                "strong",
                "p",
                "img",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "ul",
                "ol",
                "li",
                "br",
                "hr",
                "blockquote",
            ],
            allowedAttributes: {
                // Allow only safe attributes
                a: ["href", "title", "target"],
                img: ["src", "alt", "width", "height"],
                // No event listeners
            },
            allowedSchemes: ["http", "https", "mailto"], // Allow only safe schemes for links
        });
    };

    return (
        <div>
            {isHtml ? (
                // Render sanitized HTML content safely using dangerouslySetInnerHTML
                <div
                    className="prose text-inherit prose-headings:text-inherit prose-sm prose-headings:my-2 prose-h1:text-2xl prose-h1:font-bold prose-h2:text-xl prose-h2:font-semibold prose-p:my-1 prose-ul:pl-5 prose-li:marker:text-black-500 prose-a:text-blue-600 prose-a:underline"
                    dangerouslySetInnerHTML={{
                        __html: sanitizeContent(content || "").replace(
                            /<a\s+/g,
                            '<a target="_blank" rel="noopener noreferrer" '
                        ),
                    }}
                />
            ) : (
                // Render Markdown content using ReactMarkdown
                <Markdown>{content}</Markdown>
            )}
        </div>
    );
};

export default ContentRenderer;