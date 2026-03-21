import styled from "styled-components";
import { Badge } from "../badge";
import { ButtonLink } from "../button";

interface ICardProps {
	appearance?: "blue" | "green" | "pink" | "cyan" | "grey";
	textSize?: "base" | "large";
	text?: string;
	newsData?: string;
	badgeText?: string;
	buttonText?: string;
	children?: React.ReactNode;
}

const StyledCard = styled.div<ICardProps>`
	display: inline-flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
	gap: ${(props) => props.theme.spacing.inner.grouped};
	min-width: 400px;
	max-width: 640px;
	padding: ${(props) => props.theme.spacing.padding.default};
	background-color: ${(props) => props.theme.colors.bg.neutral.section.calm};
	border: 1px solid ${(props) => props.theme.colors.border.grey.calm.enabled};
	color: ${(props) => props.theme.colors.text.main};

	.card-content {
		display: flex;
		flex-direction: column;
		gap: inherit;
		width: 100%;
	}

	.card-header {
		display: inherit;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.card-header-date {
			font-size: ${(props) =>
				props.theme.typography.fontSize.component.base};
			line-height: ${(props) =>
				props.theme.typography.lineHeight.component.base};
			font-weight: ${(props) => props.theme.typography.fontWeight.medium};
		}
	}

	.card-body {
		display: inherit;
		flex-direction: inherit;
		gap: inherit;
		align-items: start;

		p {
			${(props) =>
				props.textSize === "base" &&
				`
                    font-size: ${props.theme.typography.fontSize.component.base};
                    line-height: ${props.theme.typography.lineHeight.component.base};
                    font-weight: ${props.theme.typography.fontWeight.regular};
    `}

			${(props) =>
				props.textSize === "large" &&
				`
                    font-size: ${props.theme.typography.fontSize.heading.h4};
                    line-height: ${props.theme.typography.lineHeight.heading.h4};
                    font-weight: ${props.theme.typography.fontWeight.semiBold};
    `}
		}
	}

	${(props) =>
		props.appearance &&
		`
        border-color: ${props.theme.colors.transpatent};
        color: ${props.theme.colors.text.inverted};
        background-color: ${
			props.theme.colors.bg[props.appearance].loud.enabled
		};
    `}
`;

export const Card: React.FC<ICardProps> = ({
	appearance,
	textSize = "base",
	text = "base text",
	newsData = "01.01.2026",
	badgeText = "Новости",
	buttonText = "Перейти",
	children,
}) => {
	return (
		<StyledCard appearance={appearance} textSize={textSize}>
			<div className="card-content">
				<div className="card-header">
					<span className="card-header-date">{newsData}</span>
					<Badge
						size="small"
						appearance={appearance}
						text={badgeText}
					/>
				</div>
				<div className="card-body">
					{text ? <p>{text}</p> : null}

					{children ? <div>{children}</div> : null}
				</div>
			</div>
			<div className="card-footer">
				<ButtonLink
					appearance={appearance ? "inverted" : "primary"}
					text={buttonText}
					iconAfter="chevronRight"
				/>
			</div>
		</StyledCard>
	);
};
