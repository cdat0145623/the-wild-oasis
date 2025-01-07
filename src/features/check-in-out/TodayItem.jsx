import styled from "styled-components";
import PropTypes from "prop-types";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
    display: grid;
    grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
    gap: 1.2rem;
    align-items: center;

    font-size: 1.4rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--color-grey-100);

    &:first-child {
        border-top: 1px solid var(--color-grey-100);
    }
`;

// eslint-disable-next-line no-unused-vars
const Guest = styled.div`
    font-weight: 500;
`;

// eslint-disable-next-line no-unused-vars
function TodayItem({ activity }) {
    // eslint-disable-next-line no-unused-vars
    const { id, guests, status, numNights } = activity;
    return (
        <StyledTodayItem>
            {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
            {status === "checked-in" && <Tag type="blue">Departing</Tag>}

            <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
            <Guest>{guests.fullName}</Guest>
            <div>{numNights} nights</div>

            {status === "unconfirmed" && (
                <Button
                    size="small"
                    variation="primary"
                    as={Link}
                    to={`/checkin/${id}`}
                >
                    Checked in
                </Button>
            )}

            {status === "checked-in" && <CheckoutButton bookingId={id} />}
        </StyledTodayItem>
    );
}

TodayItem.propTypes = {
    activity: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default TodayItem;
